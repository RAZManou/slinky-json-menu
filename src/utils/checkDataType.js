const checkDataType = (data) => {
    if (Object.prototype.toString.call(data) === "[object Array]")
        return "array";

    const type = typeof data;

    return type;
};

export default checkDataType;
