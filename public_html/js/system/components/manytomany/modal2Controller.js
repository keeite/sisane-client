moduloDirectivas.controller('mtmModal2', ['$scope', 'metaService', 'id', 'reference','from', function ($scope, metaService, id, reference,from) {
        var fields = metaService.getMeta()[reference].fields;
        
        $scope.bean = {id: null};
        var pos = null;
        for (var f in fields) {
            if (fields[f].name.match('obj_')) {
                $scope.bean[fields[f].name] = {id: 0}

            }
            if(fields[f].name.match('obj_' + from)){
                $scope.bean[fields[f].name].id = id;
                pos = f;
            }
        }
        delete fields[pos];

        $scope.fields = fields;




    }]);


