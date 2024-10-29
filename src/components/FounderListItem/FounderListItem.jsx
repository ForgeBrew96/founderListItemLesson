import './FounderListItem.css'

const FounderListItem = (props) => {
    return (
      <li>
        <h3>Hello, my name is { props.name }!, the { props.title }!</h3>
        <p>Education: { props.credential }</p>
      </li>
    );
  };
  
  export default FounderListItem;