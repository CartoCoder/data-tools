// Indiana 250k Quad map automation
// 1. Create FILL, STROKE, SYMBOL, SHADING layers
#target Illustrator // identifies script as AI script

function AddLayersToOpenDocuments()
{
	for (i = 0; i < app.documents.length; i++)
	{
		var activeDoc = app.documents[i];
        //$.writeln("activeDoc = " + activeDoc.name);
		//var layerCount = activeDoc.layers.length;
		var newLayerList = ["FILL", "STROKES", "SYMBOLS", "BADGES", "BORDER"];
        //$.writeln("newLayerList length " + newLayerList.length);
		for (j = 0; j < newLayerList.length; j++)
		{
			//$.writeln("j = " + j);
            var newLayer = activeDoc.layers.add();
			newLayer.name = newLayerList[j];
		}
	}
}

AddLayersToOpenDocuments();

//**********************************************************************************

function RenameLayer()
{
	
		var activeDoc = app.activeDocument;
		layerList = activeDoc.layers.length;
		for (j = 0; j < layerList; j++)
		{
			var primaryLayer = activeDoc.layers[j];
			$.writeln(primaryLayer.name);
			var primaryLayerName = new String(primaryLayer.name)

			if (primaryLayerName == "Other")
				{	var newName = "SCALEBAR - TURN OFF";
					primaryLayer.name = newName;
					$.writeln("updated scalebar");
				}

			// begin loop through sublayers level 1
			
			for (var k = primaryLayer.layers.length - 1; k >= 0; k--)
			{
				var secondaryLayer = primaryLayer.layers[k];
				var secondaryLayerName = new String(secondaryLayer.name)
				if (secondaryLayerName == "Labels")
				{
					var newName = "TEXT";
					secondaryLayer.name = newName;
					$.writeln("updated text");

				}
				if (secondaryLayerName == "Graticule")
				{
					var newName = "Stroke - Graticule";
					secondaryLayer.name = newName;
					$.writeln("updated graticule");
					secondaryLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
				}
				
				for (var m = secondaryLayer.layers.length - 1; m >= 0; m--)
				{
					var tertiaryLayer = secondaryLayer.layers[m];
					var tertiaryLayerName = new String(tertiaryLayer.name);
					if (tertiaryLayerName == "Fill - Mask - Default")
					{
						var newLayerName = "Text - County";
						tertiaryLayer.name = newLayerName;
						$.writeln("updated county");
						secondaryLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
					}
				}
				
				
				
	        }
				
		}

	
}

RenameLayer();

//***********************************************************************************

function RenameLayer()
{
	for (i = 0; app.documents.length; i++)
	{
		var activeDoc = app.documents[i];
		layerList = activeDoc.layers.length;
		for (j = 0; j < layerList; j++)
		{
			var primaryLayer = activeDoc.layers[j];
			for (var k = primaryLayer.layers.length - 1; k >= 0; k--)
			{
				//var subLayer = primaryLayer.layers[k]
	            //$.writeln(subLayer.name);
				//var layerName = new String(subLayer.name);
				var newLayerName = "TEXT";
				if (primaryLayer.name == "LABELS" || primaryLayer.name == "LABEL")
				{
                    $.writeln("Found it")
                    primaryLayer.name = newLayerName;
                    
                    
                 }
                  
	        }
				
		}

	}
}

RenameLayer();

//**********************************************************************************

// function MoveSubLayersToPrimaryLayers()
{
	for (i = 0; app.documents.length; i++)
	{
		var activeDoc = app.documents[i];
		layerList = activeDoc.layers.length;
		for (j = 0; j < layerList; j++)
		{
			var primaryLayer = activeDoc.layers[j];
			if (primaryLayer.name == "Layers")
			{
				for (var k = primaryLayer.layers.length - 1; k >= 0; k--)
			
				var subLayer = primaryLayer.layers[k]
	            $.writeln(subLayer.name);
				subLayer.move()
				if (layerName == "Labels")
				{
					subLayer.name = newLayerName;
				}
	        }
			}
		}

	}
}

//***********************************************************************************

function ImportGraphicStyles()
{
	
// ++ insert your path here, or a file picker prompt ++ 
var theFile = new File('C:/Program Files/Adobe/Adobe Illustrator CS6 (64 Bit)/Presets/en_US/Graphic Styles/250k State Map.ai');

var openOpt = new OpenOptions();

// ++ get swatches ++
openOpt.openAs=LibraryType.SWATCHES;
open(theFile,null,openOpt);

// ++ get graphic styles ++
openOpt.openAs = LibraryType.GRAPHICSTYLES;
open(theFile,null,openOpt);

}

ImportGraphicStyles();

//*************************************************************************************

function ApplyGraphicStyles()
{
	for (i = 0; app.documents.length; i++)
	{
		var activeDoc = app.documents[i];
		layerList = activeDoc.layers.length;
		graphicStyleList = activeDoc.graphicStyles.length;

		for (j = 0; j < layerList; j++)
		{
			var primaryLayer = activeDoc.layers[j];
			for (var k = primaryLayer.layers.length - 1; k >= 0; k--)
			{
				var subLayer = primaryLayer.layers[k]
	            $.writeln(subLayer.name);
				
				if (layerName == "OSM Roads" && subLayer.pathItem.strokeWidth == 1.2)
				{
					subLayer.selected = true;
				}
	        }
				
		}

	}
}