function compareArrays(arr1, arr2) {
    return arr1.length == arr2.length ? arr1.every((el, i) => el == arr2[i]) : false;
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length == 0) {
        return 0
    } else {
        filteredByGenderUsers = users.filter(el => el.gender == gender)
        return filteredByGenderUsers.length === 0 ? 0 : filteredByGenderUsers.reduce((acc, el) => acc + el.age, 0) / filteredByGenderUsers.length;

    }

}