from member import Member

class FamilyTree(object):

    def __init__(self):
        self.root = null

    def addMember(self, parent=None, child):
        if parent is None:
            self.root = child
