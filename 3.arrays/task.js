function compareArrays(arr1, arr2) {
    return arr1.length == arr2.length ? arr1.every((el, i) => el == arr2[i]) : false;
}

function getUsersNamesInAgeRange(users, gender) {
    console.log(users)
    if (users.length == 0) {
        return 0
    } else {
        filteredByGenderUsers = users.filter(el => el.gender == gender)
        return filteredByGenderUsers.reduce((acc, el) =>{console.log(el.age); acc + el.age, 0}) / filteredByGenderUsers.length
    }
}