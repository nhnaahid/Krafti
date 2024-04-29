import PropTypes from 'prop-types';
import { IoMdEye } from 'react-icons/io';

const CraftTable = ({ craft }) => {
    const { _id, customization, description, image, item_name, price, processing_time, rating, stockStatus, subcategory_name, userEmail, userName } = craft;
    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Craft item image" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{item_name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <p>${price}</p>
                </td>
                <td>{rating}/5</td>
                <td>{customization}</td>
                <th>
                    <button className="text-xl rounded-full  my-btn p-2"><IoMdEye></IoMdEye></button>
                </th>
            </tr>
        </>
    );
};

CraftTable.propTypes = {
    craft: PropTypes.object
};

export default CraftTable;