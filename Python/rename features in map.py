listDatasets = arcpy.ListDatasets("*") 
for dataset in listDatasets:
	listFeatures = arcpy.ListFeatureClasses("*_1", "", dataset)
	for feature in listFeatures:
		if "_1" in feature:
			oldName = str(feature)
			newName = oldName.replace("_1", "")
			#newName = newName.replace("NS", "_NS12_13")
			arcpy.Rename_management(feature, newName) 