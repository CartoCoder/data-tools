import os

os.chdir(r'P:\PubProduction\MiscItems\IGS Historical Map Collection\Source Images\Sam Frushour')
count = 0
for (dirname, dirs, files) in os.walk(r'P:\PubProduction\MiscItems\IGS Historical Map Collection\Source Images\Sam Frushour'):
        for filename in files:
            newFilename, fileType = filename.split('.')
            if filename.startswith('Sam',0,3):
                print ("yeah!")
            else:
                
                newFilename = newFilename.title()
                newFilename = newFilename.replace(' ','_')
                newFilename = newFilename.replace('-','_')
                newFilename = 'Sam_Frushour_Workmap_' + newFilename + str('_Quadrangle.') + fileType
                #print (newFilename)
                count = count + 1
                os.rename(filename, newFilename)                
                #print('renamed ' + newFilename)
print (count)