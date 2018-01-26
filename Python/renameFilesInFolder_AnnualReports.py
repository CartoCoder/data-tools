import os

count = 0
for (dirname, dirs, files) in os.walk(r'E:\Data\Projects\Data Collection Viewer Local\Source_Images\Annual_Reports\processing\'):
        for filename in files:
            newFilename, fileType = filename.split('.')
            if filename.startswith('Pages from ',0,10):
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