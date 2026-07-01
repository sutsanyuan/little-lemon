// 驗證 Step 1 的欄位
export const validateStep1 = (data) => {
    const errors = {};
    if (!data.date) errors.date = "Please select a date";
    if (!data.time) errors.time = "Please select a time";
    if (!data.guests.adult || data.guests.adult < 1)
        errors.guests = "At least one adult is required";
    return errors;
};

// 驗證 Step 2 的欄位
export const validateStep2 = (data) => {
    const errors = {};
    if (!data.name.firstName?.trim()) errors.firstName = "Firstname is required";
    if (!data.name.lastName?.trim()) errors.lastName = "Lastname is required";
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) errors.email = "Invalid email format";
    if (!data.phone || data.phone.length < 8) errors.phone = "Phone number is too short";
    if (!data.occasion) errors.occasion = "Please select an occasion";
    if (data.note.length > 200) errors.note = "Please leave your note under 200 characters";
    return errors;
};
