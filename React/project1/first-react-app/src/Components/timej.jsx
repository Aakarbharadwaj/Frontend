let Display = () => {
    let time = new Date();
    return (
        <p className="color">This is the current time <span>{time.toLocaleDateString()}{" - "}{time.toLocaleTimeString()}</span></p>
    );
}

export default Display;