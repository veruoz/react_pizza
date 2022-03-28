import React, {useState} from 'react';
import PropTypes from "prop-types";
import PizzaBlock from "./PizzaBlock";

// memo делает поверхностное сравнение и дает делать лишний раз ререндер аналог shouldUpdateComponent в классовой компоненте
const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
    // const [activeItem, setActiveItem] = useState(null);

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
                {items && items.map((name, index) => <li
                    className={activeCategory === index ? 'active' : ''}
                    key={`${name}_${index}`}
                    onClick={() => onClickCategory(index)}>{name}</li>)}
            </ul>
        </div>
    );
})

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired
}

Categories.defaultProps = {
    activeCategory: null, items: [],
}

// todo классовая компонента работа со state
// class Categories extends React.Component {
//     state = {
//         activeItem: 1,
//     }
//
//     onSelectItem = (index) => {
//         this.setState({
//             activeItem: index,
//         })
//     }
//
//     render() {
//         const { items, onClickItem } = this.props
//         console.log(this.state)
//         return (
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {items.map((item, index) =>
//                         <li
//                             className={this.state.activeItem === index ? 'active' : ''}
//                             key={`${item}_${index}`}
//                             onClick={() => this.onSelectItem(index)}>
//                             {item}
//                         </li>)}
//
//                 </ul>
//             </div>
//         );
//     }
// }

export default Categories;

