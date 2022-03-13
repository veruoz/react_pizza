import React, {useState} from 'react';

const Categories = ({ items, onClickItem }) => {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
      setActiveItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {items && items.map((item, index) => <li
                    className={activeItem === index ? 'active' : ''}
                    key={`${item}_${index}`}
                    onClick={() => setActiveItem(index)}>{item}</li>)}
            </ul>
        </div>
    );
};

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

