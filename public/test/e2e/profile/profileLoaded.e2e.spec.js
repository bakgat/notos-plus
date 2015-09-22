/**
 * notosplus - karlvaniseghem
 * Copyright © 2015
 */
describe('Notos+ Profile', function () {
    it('should show profile name', function () {
        browser.get('http://localhost:4000/');
        profileName = element(by.binding('root.profile.name'));
        expect(profileName.getText()).toEqual('Karl Van Iseghem');
    });
});