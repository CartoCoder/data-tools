import os

count = 0
os.chdir(r'P:\PubProduction\MiscItems\IGS Historical Map Collection\Code')
with open("filenameList.txt", "w") as filenameTextFile:
    for (dirname, dirs, files) in os.walk(r'P:\PubProduction\MiscItems\IGS Historical Map Collection\Source Images\Sam Frushour'):
        for filename in files:
            file = filename
            if file.endswith('.tif'):
                count = count + 1
                #print(newFileName)
                filenameTextFile.write(file[:-4] + os.linesep)
            
print ('totoal no of tifs: ' , count)   

with open("mapNameList.txt", "w") as mapNameTextFile:
    for (dirname, dirs, files) in os.walk(r'P:\PubProduction\MiscItems\IGS Historical Map Collection\Source Images\Sam Frushour'):  
        for filename in files:
            if filename.endswith('.tif'):
                mapName = filename.replace("_", " ")
                mapName = mapName.replace(".tif", "")
                mapName = mapName.replace("HWM Frushour ", "Sam Frushour Work Map - ")
                mapName = mapName + " quadrangle" 
                mapNameTextFile.write(mapName + os.linesep)           
            