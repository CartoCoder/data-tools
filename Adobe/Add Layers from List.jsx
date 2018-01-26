#target Illustrator
var activeDoc = app.activeDocument;
var layers = activeDoc.layers;
var layerList = activeDoc.layers.length;

var newLayers = [];
newLayers = ["UO1 MD"]



// FIRST LOOP THROUGH AND MOVE ALL SECOND LEVEL LAYERS TO END
function firstLoop ()
{
    var layers = activeDoc.layers;
    var layerList = activeDoc.layers.length;
for (j = 0; j < layerList; j++)
	{
		var primaryLayer = activeDoc.layers[j];
        var primaryLayerList = primaryLayer.layers.length;
        //$.writeln(primaryLayer.name + " ; sublayers = " + primaryLayerList);
		
        if (primaryLayer.name == "Layers")
        {
            
			for (var k = primaryLayerList - 1; k >= 0; k--)
			{
	            var secondaryLayer = primaryLayer.layers[k];
	            var secondaryLayerName = new String(secondaryLayer.name);
	            secondaryLayer.move(activeDoc, ElementPlacement.PLACEATEND)
	        }
      	}

	}
activeDoc.layers[1].remove();
}

function addLayers()
{
	// ADD NEW LAYERs - DEFAULT PUTS IT AT TOP OF LAYER ORDER
	var bingoLayer = activeDoc.layers.add();
	bingoLayer.name = "Text - Bingo";

	var textGraticuleLayer = activeDoc.layers.add();
	textGraticuleLayer.name = "Text - Graticule";

	layers = activeDoc.layers;	
	layerList = activeDoc.layers.length;
}


// THEN LOOP THROUGH AGAIN AND ADJUST LAYER NAMES AND ORDER.
function fixLayers()
{
	var j = 0;
while (j < layerList )
	{
		var primaryLayer = activeDoc.layers[j];
		var primaryLayerName = new String(primaryLayer.name)

		//$.writeln(primaryLayerName);

		if (primaryLayerName == "Other")
			{	var newName = "SCALEBAR - TURN OFF";
				primaryLayer.name = newName;
				//$.writeln("updated scalebar");
				primaryLayer.move(activeDoc, ElementPlacement.PLACEATEND);
				primaryLayer.visible = false;
			}
		


		else if (primaryLayerName == "Graticule")
		{
			var newName = "Stroke - Graticule";
			primaryLayer.name = newName;
		}

		else if (primaryLayerName == "Labels")
		{
			var newName = "TEXT";
			primaryLayer.name = newName;
			
            for (var m = primaryLayer.layers.length - 1; m >= 0; m--)
			{
				var secondaryLayer = primaryLayer.layers[m];
				var secondaryLayerName = new String(secondaryLayer.name);
				if (secondaryLayerName == "Fill - Mask - Default")
				{
					var newLayerName = "Text - County";
					secondaryLayer.name = newLayerName;
					secondaryLayer.move(activeDoc, ElementPlacement.PLACEATBEGINNING);
					
				}
			}
		}

		
        else
        {
        //secondaryLayer.move(activeDoc, ElementPlacement.PLACEATEND);
        //secondaryLayer.zOrder(ZOrderMethod.BRINGTOFRONT); 
        //secondaryLayer.move(activeDoc, ElementPlacement.PLACEATBEGINNING);
        //activeDocument.activeLayer.move( activeDocument.artLayers[0], ElementPlacement.PLACEBEFORE);
        }

        j++;


    }
}


function fixLayerOrder()
{
activeDoc.layers[12].move(activeDoc.layers[1], ElementPlacement.PLACEAFTER);
activeDoc.layers[15].move(activeDoc.layers[2], ElementPlacement.PLACEAFTER);
activeDoc.layers[13].move(activeDoc.layers[4], ElementPlacement.PLACEAFTER);
activeDoc.layers[15].move(activeDoc.layers[5], ElementPlacement.PLACEAFTER);
activeDoc.layers[15].move(activeDoc.layers[6], ElementPlacement.PLACEAFTER);
activeDoc.layers[15].move(activeDoc.layers[7], ElementPlacement.PLACEAFTER);
activeDoc.layers[15].move(activeDoc.layers[8], ElementPlacement.PLACEAFTER);
activeDoc.layers[15].move(activeDoc.layers[9], ElementPlacement.PLACEAFTER);
activeDoc.layers[15].move(activeDoc.layers[10], ElementPlacement.PLACEAFTER);
activeDoc.layers[15].move(activeDoc.layers[11], ElementPlacement.PLACEAFTER);
activeDoc.layers[15].move(activeDoc.layers[12], ElementPlacement.PLACEAFTER);
activeDoc.layers[15].move(activeDoc.layers[13], ElementPlacement.PLACEAFTER);

	

}