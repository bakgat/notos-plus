/*jshint maxlen:120 */
/*jshint -W079 */
var mockData = (function () {
    return {
        getMockProfile: getMockProfile,
        getUsers: getUsers
    };

    function getMockProfile() {
        return getUsers()[0];
    }

    function getUsers() {
        return [
            {
                "id": 1,
                "name": "Karl Van Iseghem",
                "kind": null,
                "gender": 'F',
                "username": "karl.vaniseghem@klimtoren.be",
                "locked": false,
                "roles": ["sa", "employee"],
                "permissions": {
                    "book": {"create": true, "update": true, "read": true, "view": true, "delete": true},
                    "website": {"create": true, "update": true, "read": true, "view": true, "delete": true}
                }
            },
            {
                "id": 2,
                "name": "Ulrike Drieskens",
                "kind": null,
                "gender": 'F',
                "username": "ulrike.drieskens@gmail.com",
                "locked": false,
                "roles": ["employee"],
                "permissions": {
                    "book": {"create": true, "update": true, "read": true, "view": true, "delete": false}
                }
            }
        ]
    }
})();