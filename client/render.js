var tree = 
{"gender": "male", "name": "Derek", "children": [{"gender": "male", "name": "Chinn", "children": []}]};

function render(item, parent) {
    parent = parent || document.createElement('div');
    var frag = document.createElement('ul');
    frag.innerHTML = '<li>Member:</li>';

    for (var k in item) {
        var li = document.createElement('li');

        if (typeof item[k] === 'object') {
            var el = render(item[k], frag);
            li.appendChild(el);
        }
        else {
            var text =  k + ': ' + item[k];
            li.innerHTML = text;
        }

        frag.appendChild(li);
    }

    return parent.appendChild(frag);
}
var thing = render(tree);
console.log(thing);
document.body.appendChild(thing);
/*
   Member:
   * gender: male
   * name: Derek
   * children:
        Member:
        * gender: male
        * name: Chinn
        Member:
        * gender: female
        * name: Shelley


<ul>Member:
    <li>prop: val</li>
    <li><ul>Member:
        <li>prop: val</li>
    </ul>
    </li>
</ul>
*/
