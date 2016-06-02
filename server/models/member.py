class Member():

    def __init__(self, props):
        self.props = props
        self.children = []

    def addChild(self, child):
        self.children.append(child)
        return self

    def serialize(self):
        copy = {k: v for k, v in self.props.iteritems()}
        serialized_children = []
        del copy['parent']

        for child in self.children:
            serialized_children.append(child.serialize())
        
        copy['children'] = serialized_children
        return copy