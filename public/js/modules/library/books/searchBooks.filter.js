/**
 * notosplus.library
 * FILTER: SearchBooks
 */
(function () {
    'use strict';

    angular
        .module('notosplus.library')
        .filter('SearchBooks', SearchBooks);

    /**
     *
     */
    function SearchBooks(_) {
        return function (books, terms) {
            terms = terms.split(' ');
            return _.select(books, function (book) {
                return _.all(terms, function (t) {
                    return byName(book, t) ||
                        byIsbn(book, t) ||
                        byAuthor(book, t) ||
                        byPublisher(book, t) ||
                        byTag(book, t);
                });
            });
        }

        function byName(book, t) {
            return _.contains(book.name.toLowerCase(), t.toLowerCase())
        }

        function byIsbn(book, t) {
            return _.contains(book.isbn, t);
        }

        function byAuthor(book, t) {
            return _.some(book.authors, function (author) {
                return _.contains(author.full_name.toLowerCase(), t.toLowerCase());
            });
        }

        function byPublisher(book, t) {
            return _.some(book.publishers, function (publisher) {
                return _.contains(publisher.full_name.toLowerCase(), t.toLowerCase());
            });
        }

        function byTag(book, t) {
            return _.some(book.tags, function (tag) {
                return _.contains(tag.name.toLowerCase(), t.toLowerCase());
            });
        }
    }
})();