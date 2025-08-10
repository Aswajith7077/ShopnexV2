import sys
import IPython
import nest_asyncio
from app.main import app
from models.users import User

def shell():
    context = {
        "app": app,
        "User": User,
        # add db session or others if needed
    }
    print("Launching IPython shell with asyncio support...")
    nest_asyncio.apply()
    IPython.start_ipython(argv=[], user_ns=context)

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "shell":
        shell()
    else:
        print("Usage: python manage.py shell")
