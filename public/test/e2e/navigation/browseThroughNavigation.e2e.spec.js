describe('Notos+ Navigation', function () {

    /*
        Management
     */
    it('should navigate to users', function() {
        browser.get('http://localhost:4000/#/manage/users');
        expect(browser.getTitle()).toContain('Gebruikers');
    });
    it('should have 3 - level breadcrumb / with last is "gebruikers"', function() {
        elements = element.all(by.repeater('step in steps'));
        expect(elements.count()).toBe(3);

        txt = elements.last().element(by.tagName('span')).getText();
        expect(txt).toEqual('gebruikers');
    });
    /*
    it('should navigate to user_roles', function() {
        browser.get('http://localhost:4000/#/manage/user_roles');
        expect(browser.getTitle()).toContain('Rollen');
    });
    it('should navigate to permissions', function() {
        browser.get('http://localhost:4000/#/manage/permissions');
        expect(browser.getTitle()).toContain('Rechten');
    });*/
    /*
        Library
     */
    it('should navigate to books', function () {
        browser.get('http://localhost:4000/#/library/books');
        expect(browser.getTitle()).toContain('Boeken');
    });
    /*it('should navigate to websites', function () {
        browser.get('http://localhost:4000/#/library/websites');
        expect(browser.getTitle()).toContain('Websites');
    });*/

    /*
        Back to Dashboard
     */
    it('should navigate to dashboard', function () {
        browser.get('http://localhost:4000/#/index/dashboard');
        expect(browser.getTitle()).toContain('Dashboard');
    });

    /*
        Minimize menu
     */
    it('should minimize menu', function() {

        browser.get('http://localhost:4000/');

        element(by.css('.navbar-minimalize')).click();
        expect(element(by.css('body')).getAttribute('class')).toContain('mini-navbar');

        element(by.css('.navbar-minimalize')).click();
        expect(element(by.css('body')).getAttribute('class')).not.toContain('mini-navbar');
    });

});