ifeq ($(shell uname), Darwin)          # Apple
    PYTHON   := python3
    PIP      := pip3
    PYLINT   := pylint
    COVERAGE := coverage
    PYDOC    := pydoc3
    AUTOPEP8 := autopep8
else ifeq ($(shell uname -p), unknown) # Windows
    PYTHON   := python                 
    PIP      := pip3
    PYLINT   := pylint
    COVERAGE := coverage
    PYDOC    := python -m pydoc       
    AUTOPEP8 := autopep8
else                                   # UTCS
    PYTHON   := python3
    PIP      := pip3
    PYLINT   := pylint3
    COVERAGE := coverage
    PYDOC    := pydoc3
    AUTOPEP8 := autopep8
endif

versions:
	$(PYTHON) --version
	$(PIP) --version
	$(PYLINT) --version
	$(COVERAGE) --version
	$(PYDOC) --version
	$(AUTOPEP8) --version

models.html: models.py
	$(PYDOC) -w  models
IDB1.log:
	git log > IDB1.log
IDB2.log:
	git log > IDB2.log
IDB3.log:
	git log > IDB3.log

clean:
	rm -f models.html
	rm -f IDB1.log
	rm -f IDB2.log
	rm -f IDB3.log