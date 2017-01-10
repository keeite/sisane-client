moduloDirectivas.component('foreignKey', {
    templateUrl: "js/system/components/foreignkey/foreignkey.html",
    controllerAs: 'fk',
    controller: foreignkey,
    bindings: {
        bean: '=',
        name: '<',
        reference: '<',
        description: '<',
        required: '<'
    }

});

function foreignkey(serverService, $uibModal) {
    var self = this;

    self.chooseOne = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'js/' + self.reference + '/selection.html',
            controller: serverService.capitalizeWord(self.reference) + "SelectionController",
            size: 'lg'
        }).result.then(function (modalResult) {
            self.change(modalResult);
        });
    };

    self.change = function (id) { 
        if (self.bean) {
            serverService.promise_getOne(self.reference, id).then(function (response) {
                var old_id = id;
                self.bean = response.data.message;
                if (response.data.message.id <= 0) {
                    self.bean.id = old_id;
                } else {
                    if (Array.isArray(self.description)) {
                        self.desc = "";
                        for (var d in self.description) {
                            self.desc += self.bean[self.description[d]] + " ";
                        }
                    }else{
                        self.desc = self.bean[self.description];
                    }
                }
            });
        }
    };
}


