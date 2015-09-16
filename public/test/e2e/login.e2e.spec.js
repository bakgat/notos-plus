require('../lib/waitReady.js');

describe('Notos+ Login', function() {

    var usernameInputElm = $('#username'),
        passwordInputElm = $('#password'),
        loginBtnElm = $('input[type=submit]');

    var username = 'karl.vaniseghem@klimtoren.be',
        password = 'password';

    it('non-angular page so ignore sync and active wait to load', function() {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:4000/');
        expect(usernameInputElm.waitReady()).toBeTruthy();
        expect(passwordInputElm.waitReady()).toBeTruthy();
    });
    it('should fill user and password and logins', function() {
        usernameInputElm.sendKeys(username);
        passwordInputElm.sendKeys(password);
        loginBtnElm.click();
    });
    it('restores ignore sync when switching back to angular pages', function() {
        browser.ignoreSynchronization = false;
        // restore
        browser.get('http://localhost:4000/');
        expect(browser.getTitle()).toContain('Dashboard');
    });
});
