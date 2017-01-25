moduloDirectivas.controller('mtmModal', ['$scope', 'serverService', '$uibModalInstance', '$uibModal', 'id', 'reference', 'currentTable', function ($scope, serverService, $modalInstance, $uibModal, id, reference, currentTable) {
        $scope.fields = reference.fields;
        $scope.vars = reference.vars;

        function getData(id) {
            serverService.promise_getPage(reference.name, 5, 1, 'and,id_' + currentTable + ',equa,' + id).then(function (data) {
                var vars = reference.vars;
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

                $scope.data = result;
            }).catch(function (err) {
                console.log('error', err);
            });
        }
        getData(id);

        $scope.add = function () {
            var modalInstance2 = $uibModal.open({
                templateUrl: 'js/system/components/manytomany/modal2.html',
                controller: 'mtmModal2',
                size: 'lg',
                resolve: {
                    id: function () {
                        return id;
                    },
                    reference: function(){
                        return reference.name;
                    },
                    from: function(){
                        return currentTable;
                    }
                }
            }).result.then(function (modalResult) {

                if (modalResult) {
                    getData();
                }

            });
        }


        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
            //$uibModalInstance.close();
        }








    }]);

