module.exports = (ngModule) => {
    ngModule.directive("externalDirective", [() => {
        return {
            template: "<h4> This is external directive from seprate file.</h4>"
        }
    }]);
};
