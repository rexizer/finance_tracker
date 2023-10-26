app = Flask(__name__)

if platform.lower().startswith('win'):
    DATABASE = './finance.db'
else:
    DATABASE = '../finance.db'