const isValueValid = (value) => {
    let isValid = true
    if (!value) return false
    else {
        if (value && typeof value=="string" && value.trim().length == 0){
            return false
        }
    }
    return isValid
}

exports.isValueValid=isValueValid