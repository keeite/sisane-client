moduloDirectivas.component('manytomany', {
    templateUrl: "js/system/components/manytomany/manytomany.html",
    controllerAs: 'mtm',
    controller: manyToMany,
    bindings: {
        iconbootstrap: '@',
        id: '<',
        referencetable: '<',
        table: '<'
    }

});


function manyToMany(serverService, $uibModal) {
    var self = this;
    var widthPage = window.innerWidth;


//    function mtmmodal2($scope, serverService, $uibModalInstance, id) {
//        $scope.finish = function () {
////            $uibModalInstance.dismiss();
//            $uibModalInstance.close();
//        }
//    }

//    $("#mtmModal").modal({
//        show: false, // muestra el modal cuando se inicializa
//        keyboard: true, // permite o no cerrar el modal con la tecla escape
//        backdrop: 'static' //
//    });

    self.open = function (id) {
//        $("#mtmModal" + self.id).modal('show');
//        getData(id);
console.log('open',id);
        var modalInstance = $uibModal.open({
            templateUrl: 'js/system/components/manytomany/modal.html',
            controller: 'mtmModal',
            size: 'lg',
            resolve: {
                id: function () {
                    return id;
                },
                reference: function () {
                    return self.referencetable;
                },
                currentTable: function () {
                    return self.table;
                }
            }
        }).result.then(function (modalResult) {
            if (modalResult) {
            }

        });

    }
    
//    $("#mtmModal" + self.id).on('shown.bs.modal',function(){
//        getData();
//        console.log("entra");
//    });
    
    function getData(id) {
        serverService.promise_getPage(self.referencetable.name, 5, 1, 'and,id_' + self.table + ',equa,' + id).then(function (data) {
            var vars = self.referencetable.vars;
            var mdata = data.data.message;
            var result = [];
            
            for (var d in mdata) {
                var res = [];
                for (var v in vars) {
                    if (typeof vars[v] === 'object') {
                        var n = Object.keys(vars[v]);
                        res.push(mdata[d][n[0]][vars[v][n[0]]]);
                   } else {
                        res.push(mdata[d][vars[v]]);
                    }
                }
                result.push(res);
            }
           
            self.data = result;
        }).catch(function(err){
            console.log('error',err);
        });
    }

//    $("#myModal").dialog({
//        autoOpen: false,
//        width: 0.70 * widthPage,
//        show: {
//            effect: "blind",
//            duration: 1000
//        },
//        hide: {
//            effect: "explode",
//            duration: 1000
//        }
//    });
//    self.open = function (dialog) {
//        switch (dialog) {
//            case 1:
//                console.log('objeto', self);
//                console.log('id', this.id);
//                $("#myModal").dialog('open');
//                break;
//        }
//    }
//    $("#myModal").on('dialogopen',function(){
//        serverService.promise_getPage(self.referencetable.name,5,1,'and,id_' + self.table + ',equa,' + self.id).then(function(data){
//            console.log(data.data.message);
//            
//        });
//    });


}


