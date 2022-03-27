import React, {useState} from 'react';

// memo делает поверхностное сравнение и дает делать лишний раз ререндер аналог shouldUpdateComponent в классовой компоненте
const Categories = React.memo(function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {items && items.map((name, index) => <li
                    className={activeItem === index ? 'active' : ''}
                    key={`${name}_${index}`}
                    onClick={() => onSelectItem(index)}>{name}</li>)}
            </ul>
        </div>
    );
})

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

