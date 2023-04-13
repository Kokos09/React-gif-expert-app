import { useFecthGifs } from "../hooks/useFecthGifs";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFecthGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2 className={'hidden'}></h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            title={image.title}
                            url={image.url}
                        />
                    ))
                }
            </div>

        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}