module.exports{
 normalisation : [
          {
            "binding" : "siteID",
            "hydstra_mappings" :  [ 
                            { 
                              "table" : "site",
                              "field" : "station"
                            },
                            { 
                              "table" : "areasmt",
                              "field" : "station"
                            },
                            { 
                              "table" : "hydmeas",
                              "field" : "station"
                            }
                          ]
          },
          {
            "binding" : "basin",
            "hydstra_mappings" : [ 
                            { 
                              "table" : "site",
                              "field" : "category1" 
                            }
                          ]
          },
          {
            "binding" : "jobName",
            "hydstra_mappings" : [ 
                            { 
                              "table" : "areasmt",
                              "field" : "asstype"
                            }
                          ]
          },
          {
            "binding" : "officer",
            "hydstra_mappings" : [ 
                            { 
                              "table" :"areasmt",
                              "field" :"assofficer" 
                            }
                          ]
          },
          {
            "binding" : "wellField",
            "hydstra_mappings" : [ 
                          { 
                              "table" :"site",
                              "field" :"category2" 
                          }
                          ]
          },
          {
            "binding" : "visitDate",
            "hydstra_mappings" : [ 
                            { 
                              "table" : "areasmt",
                              "field" : "date",
                            }, 
                            {
                              "table" : "hydmeas"
                              "field" : "date"
                            },
                            { 
                              "table" : "pumptest",
                              "field" :"testdate"
                            },
                            { 
                              "table" : "pumpread",
                              "field" :"testdate"
                            },
                            { 
                              "table" : "samples",
                              "field" :"date"
                            },
                            {
                              "table" : "samples",
                              "field" :"date" 
                            }
                          ]
          }, 
          {
            "binding" : "visitTime",
            "hydstra_mappings" : [ 
                            { 
                              "table" : "stnvisit", 
                              "field" : "starttime" 
                            }
                          ]
          },
          {
            "binding" : "freeGas",
            "hydstra_mappings" : [ 
                            { 
                              "table" : "results",
                              "field" : "variable",
                              "value" : 480 
                            },
                            { 
                              "table" : "results",
                              "field" : "value" 
                            }
                          ]
          },
          {
            "binding" : "wellType",
            "hydstra_mappings" : [ 
                          { 
                            "table" :"site",
                            "field" : "stntype"
                          }
                        ]
          },
          {
            "binding" : "wellMaterial",
            "hydstra_mappings" : [ 
                            { 
                              "table" :"casing",
                              "field" :"casetype" 
                            }
                          ]
          },
          {
            "binding" : "wellHeadCondition",
            "hydstra_mappings" : [ 
                            { 
                              "table" : "hydrlmp",
                              "field" : "comment" 
                            }
                          ]
          },
          {
            "binding" : "waterLevel",
            "hydstra_mappings" : [ 
                            { 
                              "table" : "hydmeas", 
                              "field" : "value" 
                            },
                            {

                              "table" : "hydmeas",
                              "field" : "variable",
                              "value" : 110 
                            }
                          ]
          },
          {
            "binding" : "measPointDesc",
            "hydstra_mappings" : [ { 
                              "table" : "hydrlmp" : "measptdesc" }
                          ]
          },
          {
            "binding" : "totalDepth",
            "hydstra_mappings" : [ { 
                              "table" : "gwhole" : "depthdrill" }
                          ]
          },
          {
            "binding" : "wellDiam",
            "hydstra_mappings" : [
                            { 
                              "table" : "casing",
                              "field" : "outdiam" 
                            }
                          ]
          },
          {
            "binding":"bailerType",
            "hydstra_mappings" : [
                            { 
                              "table" : "pumpttest", 
                              "field" : "comments"  
                            }
                          ]
          },
          {  
            "binding":"pumpType", 
            "hydstra_mappings" : [  
                            { 
                              "table": "pumpttest", 
                              "field":"comments"
                            }
                          ]
          },
          {  
            "binding":"dissolvedOx", 
            "hydstra_mappings" : [  
                            { 
                              "table": "results", 
                              "field":"value"
                            },
                            { 
                              "table": "results", 
                              "field":"variable",
                              "value":110 //is this the case?
                            }
                          ]
          },
          {  
            "binding":"dissolvedOxPPM", 
            "hydstra_mappings" : [  
                            { 
                              "table": "results", 
                              "field":"value"
                            },
                            { 
                              "table": "results", 
                              "field":"variable",
                              "value":112 //is this the case?
                            }
                          ]
          },
          {  
            "binding":"EC", 
            "hydstra_mappings" : [  
                            { 
                              "table": "results", 
                              "field":"value"
                            },
                            { 
                              "table": "results", 
                              "field":"variable",
                              "value": 410 //is this the case? milliseimens
                            }
                          ]
          },
          {  
            "binding":"EC2", 
            "hydstra_mappings" : [  
                            { 
                              "table": "results", 
                              "field":"value"
                            },
                            { 
                              "table": "results", 
                              "field":"variable",
                              "value": 410 //is this the case? microseimens
                            }
                          ]
          },
          {  
            "binding":"pH", 
            "hydstra_mappings" : [  
                            { 
                              "table": "results", 
                              "field":"value"
                            },
                            { 
                              "table": "results", 
                              "field":"variable",
                              "value": 850 //is this the case? 
                            }
                          ]
          },
          {  
            "binding":"redox", 
            "hydstra_mappings" : [  
                            { 
                              "table": "results", 
                              "field":"value"
                            },
                            { 
                              "table": "results", 
                              "field":"variable",
                              "value": 250 //is this the case? 
                            }
                          ]
          },
          {  
            "binding":"temp", 
            "hydstra_mappings" : [  
                            { 
                              "table": "results", 
                              "field":"value"
                            },
                            { 
                              "table": "results", 
                              "field":"variable",
                              "value": 450 //is this the case? 
                            }
                          ]
          },
          {  
            "binding":"turb", 
            "hydstra_mappings" : [  
                            { 
                              "table": "results", 
                              "field": "value"
                            },
                            { 
                              "table": "results", 
                              "field":"variable",
                              "value": 150 //is this the case? 
                            }
                          ]
          },
          {  
            "binding":"bottle", 
            "hydstra_mappings" : [  
                            { 
                              "table": "samples", 
                              "field": "bottle"
                            }
                          ]
          },
          {  
            "binding":"sampnum", 
            "hydstra_mappings" : [  
                            { 
                              "table": "samples", 
                              "field": "sampnum"
                            }
                          ]
          },
          {  
            "binding":"samptype", 
            "hydstra_mappings" : [  
                            { 
                              "table": "samples", 
                              "field": "samptype"
                            }
                          ]
          },
          {  
            "binding":"samples_commnt", 
            "hydstra_mappings" : [  
                            { 
                              "table": "samples", 
                              "field": "commnt"
                            }
                          ]
          }
        ]
}        