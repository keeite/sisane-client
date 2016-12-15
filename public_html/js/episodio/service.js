'use strict';
moduloEpisodio.factory('episodioService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "fecha", shortname: "Fecha", longname: "Fecha", visible: true, type: "date", required: 'true', maxlength: 255, pattern: ""},
                    {name: "informe", shortname: "Informe", longname: "Informe", visible: true, type: "textarea", required: true, maxlength: 5000, pattern: ""},
                    {name: "importe", shortname: "Importe", longname: "Importe", visible: true, type: "text", required: true, maxlength: 255, pattern: serverService.getRegExpr('decimal'),help:serverService.getRegExpl('decimal')},
                    {name: "obj_importancia", shortname: "Importancia", longname: "Importancia", visible: true, type: "specific", required: false, reference:"importancia"},
                    {name: "obj_servicio", shortname: "Servicio", longname: "Servicio", visible: true, type: "specific", required: false, reference:"servicio"},
                    {name: "obj_tipo", shortname: "Tipo", longname: "Tipo", visible: true, type: "specific", required: false, reference:"tipo"},
                    {name: "obj_paciente", shortname: "Paciente", longname: "Paciente", visible: true, type: "specific", required: false, reference:"paciente"},
                    {name: "obj_medico", shortname: "Medico", longname: "Medico", visible: true, type: "specific", required: false, reference:"medico"},
                    {name: "obj_episodio", shortname: "Episodio", longname: "Episodio", visible: true, type: "specific", required: false, reference:"episodio"},                    
                    {name: "obj_prioridad", shortname: "Prioridad", longname: "Prioridad", visible: true, type: "specific", required: false, reference:"prioridad"}                    
                ];
            },
            getIcon: function () {
                return "fa-file-text-o";
            },
            getObTitle: function () {
                return "episodio";
            },
            getTitle: function () {
                return "episodio";
            }
        };
    }]);


