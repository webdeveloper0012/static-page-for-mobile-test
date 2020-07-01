var sel = findSel();
document.getElementById('x-List').children[sel].style.color = '#D5A25B';

function findSel()	{
    var d = new Date();
    switch (d.getDay())	{
        case 1: return 0;
        case 2:
        case 3: return 1;
        case 4:
        case 5: return 2;
        case 6: return 3;
        default: return 4;
	}
}