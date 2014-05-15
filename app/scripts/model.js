module.exports = {
  //site : require('./site.json')
  filters:[
        {
            label: "All",
            filter: 'all'
        },
        {
            label: "Active",
            filter: 'active'
        },
        {
            label: "Completed",
            filter: 'completed'
        }
    ],
   filter: "all",
   fieldsEnabled: "true",
   normalisation : [
          {
            "binding" : "siteID",
            "mappings" :  [ 
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
            "mappings" : [ 
                            { 
                              "table" : "site",
                              "field" : "category1" 
                            }
                          ]
          },
          {
            "binding" : "jobName",
            "mappings" : [ 
                            { 
                              "table" : "areasmt",
                              "field" : "asstype"
                            }
                          ]
          },
          {
            "binding" : "officer",
            "mappings" : [ 
                            { 
                              "table" :"areasmt",
                              "field" :"assofficer" 
                            }
                          ]
          },
          {
            "binding" : "wellField",
            "mappings" : [ 
                          { 
                              "table" :"site",
                              "field" :"category2" 
                          }
                          ]
          },
          {
            "binding" : "visitDate",
            "mappings" : [ 
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
            "mappings" : [ 
                            { 
                              "table" : "stnvisit", 
                              "field" : "starttime" 
                            }
                          ]
          },
          {
            "binding" : "freeGas",
            "mappings" : [ 
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
            "mappings" : [ 
                          { 
                            "table" :"site",
                            "field" : "stntype"
                          }
                        ]
          },
          {
            "binding" : "wellMaterial",
            "mappings" : [ 
                            { 
                              "table" :"casing",
                              "field" :"casetype" 
                            }
                          ]
          },
          {
            "binding" : "wellHeadCondition",
            "mappings" : [ 
                            { 
                              "table" : "hydrlmp",
                              "field" : "comment" 
                            }
                          ]
          },
          {
            "binding" : "waterLevel",
            "mappings" : [ 
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
            "mappings" : [ { 
                              "table" : "hydrlmp" : "measptdesc" }
                          ]
          },
          {
            "binding" : "totalDepth",
            "mappings" : [ { 
                              "table" : "gwhole" : "depthdrill" }
                          ]
          },
          {
            "binding" : "wellDiam",
            "mappings" : [
                            { 
                              "table" : "casing",
                              "field" : "outdiam" 
                            }
                          ]
          },
          {
            "binding":"bailerType",
            "mappings" : [
                            { 
                              "table" : "pumpttest", 
                              "field" : "comments"  
                            }
                          ]
          },
          {  
            "binding":"pumpType", 
            "mappings" : [  
                            { 
                              "table": "pumpttest", 
                              "field":"comments"
                            }
                          ]
          }
        ]
}
