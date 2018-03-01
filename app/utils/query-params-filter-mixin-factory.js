import Mixin from '@ember/object/mixin';


/**
 * @param paramsObject - query params keys and default values
 * @return {Mixin}
 * @public
 */
const queryParamsFilterMixin = function(paramsObject = {}) {
    const queryParams = Object.keys(paramsObject);
    const FiltersMixin = Mixin.create({
        queryParams,
        actions: {
            resetFilters() {
                this.setProperties(paramsObject);
                this.send('resetPagination');
            },
        },
        // default values
        ...paramsObject,
    });

    return FiltersMixin;
};

export default queryParamsFilterMixin;
