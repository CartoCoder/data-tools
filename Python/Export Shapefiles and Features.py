# Name: Export Shapefiles and Features.py
# Description: Exports pdmssde.DBO.AllWells and pdmssde.DBO.Petroleum_Fields to shapefiles and geodatabase.
# Author: Matthew Johnson and Justin Peters

# Import system modules
import arcpy
from arcpy import env
 
#set local folder - ADD LOCAL STORAGS LOCATION HERE
localFolder = 'c:/data'
 
# Set environment settings
env.workspace = localFolder

try:
 arcpy.AddMessage("Looking for old items to delete.")
    
#delete folder contents
 arcpy.Delete_management("AllWells.shp")
 arcpy.Delete_management("Petroleum_Fields.shp")
 arcpy.Delete_management("PDMS_Export.gdb")

except:
 arcpy.AddMessage("No items to delete.")
 
finally:
 arcpy.AddMessage("Creating exports...")

 # Set local variables - MAKE SURE THESE TWO ITEMS HAVE THE RIGHT USER NAME
 allWells = 'C:/users/mrj21/AppData/Roaming/ESRI/Desktop10.5/ArcCatalog/PDMS SDE.sde/pdmssde.DBO.AllWells'
 petroleumFields = 'C:/users/mrj21/AppData/Roaming/ESRI/Desktop10.5/ArcCatalog/PDMS SDE.sde/pdmssde.DBO.Petroleum_Fields'

 #shapefile export location
 shpExportLocation = localFolder
 
 #Save as shapefiles
 arcpy.FeatureClassToShapefile_conversion(allWells, shpExportLocation)
 arcpy.FeatureClassToShapefile_conversion(petroleumFields, shpExportLocation)

 #create geodatabase
 arcpy.CreateFileGDB_management(localFolder, "PDMS_Export")

 #geodatabase location
 gdbLocation = "c:/data/PDMS_Export.gdb"

 # Save to geodatabase
 arcpy.FeatureClassToFeatureClass_conversion(allWells, gdbLocation, "AllWells")
 arcpy.FeatureClassToFeatureClass_conversion(petroleumFields, gdbLocation, "PetroleumFields")

 arcpy.AddMessage("Exports complete.")
