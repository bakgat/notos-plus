describe('ntFa', function() {

    beforeEach(module('notosplus.widgets'));

    var element, outerScope, innerScope;

    beforeEach(inject(function($compile, $rootScope) {
        element = angular.element('<div><nt-fa name="user"></div>');

        outerScope = $rootScope;
        $compile(element)(outerScope);

        innerScope = element.isolateScope();

        outerScope.$digest();
    }));


    describe('tag', function() {
        it('should be replaced with i', function() {
            expect(element).to.be.an('object');
            expect(element[0].children[0].tagName).to.equal('I');
        });
    });

    describe('class', function() {
        it('should contain fa and fa-user', function() {
            var el = element.find('i');
            expect(el.hasClass('fa-user') && el.hasClass('fa')).to.be.true;
        });
    })
});
