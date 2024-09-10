function Zoo(props) {
    const{animal11,animal22,animal33} = props;
    return (
        <div>
            <p>First Animal: {animal11}</p>
            <p>Second Animal: {props.animal22}</p>
            <p>Thirs Animal: {props.animal33}</p>
        </div>
    );
}
export default Zoo;