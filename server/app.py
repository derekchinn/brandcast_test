from flask import Flask
import json

from models.member import Member

app = Flask(__name__)

@app.route('/')
def main():
    tree = buildTree()
    return json.dumps(tree.serialize())

# @app.route('/view')
# def view()
#     return

def buildTree():
    root = Member({
        'name': 'Derek',
        'gender':'male',
        'parent': None
    })
    root.addChild(Member({
        'name': 'Chinn',
        'gender':'male',
        'parent': root
    }))

    return root

if __name__ == '__main__':
    app.run()