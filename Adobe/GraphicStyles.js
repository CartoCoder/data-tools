// Apply PWLM Graphic Styles

function LoadGraphicStyles()
{
	
// ++ insert your path here, or a file picker prompt ++ 
var theFile = new File('C:/Data/AI Graphic Styles/250k State Map v01.ai');
//var theFile = new File('C:/Data/AI Graphic Styles/PWLM TD Styles.ai');

var openOpt = new OpenOptions();

// ++ get swatches ++
openOpt.openAs=LibraryType.SWATCHES;
open(theFile,null,openOpt);

// ++ get graphic styles ++
openOpt.openAs = LibraryType.GRAPHICSTYLES;
open(theFile,null,openOpt);

}

//**********************************************************************

#target Illustrator

function GetLayerByNameAndApplyGraphicStyle()
{
    var activeDoc = app.activeDocument;
    var layerList = activeDoc.layers.length;
    for (var i = layerList - 1; i >= 0; i--)
    {
        var activePrimaryLayer = activeDoc.layers[i];
        $.writeln(activePrimaryLayer.name)
        $.writeln(activePrimaryLayer.layers.length);
        var sublayerList = activePrimaryLayer.layers.length;
        for (var j = sublayerList - 1; j >= 0; j--)
        {
            activeSubLayer = activePrimaryLayer.layers[j];
            $.writeln(activeSubLayer.name)
            if (activeSubLayer.name == "Border")
            {
                activeSubLayer.visible = true;
                activeSubLayer.locked = false;
                activeSubLayer.selected = true;
                for (k = 0; k < activeSubLayer.pageItems.length; k++)
                {
                    $.writeln(activeSubLayer.pageItems.length);
                    //$.writeln(activeSubLayer.pageItems.name);
                    activeDoc.graphicStyles[1].applyTo(activeSubLayer.pageItems[k]);
                }
            }
        }
    }
}

GetLayerByNameAndApplyGraphicStyle

//***********************************************************************


function SelectLayers()
{
    var layerList = activeDoc.layers.length;
	for (var j = layerList - 1; j >= 0; j--)
	{
		var mapLayer = activeDoc.layers[j];
        $.writeln(mapLayer.name);

		for (var k = mapLayer.layers.length - 1; k >= 0; k--)
		{
			var subLayer = mapLayer.layers[k]
            $.writeln(subLayer.name);
			subLayer.selected = true;
           
            subLayer.selected = false;
        }
    }
}


ApplyGraphicStyles();