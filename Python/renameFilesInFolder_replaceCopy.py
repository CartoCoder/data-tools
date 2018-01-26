import os

os.chdir(r'\\bl-geoy-crinoid\E$\inetpub\wwwroot\arcgis\Resources\IGS Historical Map Collection\Source_Images\StateMap_8bit')
count = 0
for (dirname, dirs, files) in os.walk(r'\\bl-geoy-crinoid\E$\inetpub\wwwroot\arcgis\Resources\IGS Historical Map Collection\Source_Images\StateMap_8bit'):
	for filename in files:
		newfilename = filename.replace(' copy', '')
		#newfilename = filename.replace(' ', '_')
		os.rename(filename, newfilename)
		count = count + 1

print (count)