import * as Colors from '../../colors';

export const KNOB_WRAPPER_STYLE = {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5px',
    border: `1px solid ${Colors.bgLighter}`,
    margin: '4px',
    width: '80px',
    backgroundColor: Colors.bgDark,
};

export const KNOB_WRAPPER_TEXT_STYLE = {
    display: 'block',
    textAlign: 'center',
    padding: '3px 0px',
    margin: 'auto',
    color: Colors.fgSecondary,
    fontWeight: '500',
    letterSpacing: '1px',
    backgroundColor: Colors.bgLighter,
    marginBottom: '8px',
    fontSize: '9pt',
    width: '60px',
};

export const SELECT_STYLE = {
    textAlign: 'right',
    padding: '3px 0px',
    margin: 'auto',
    border: 0,
    width: '60px',
    fontWeight: '500',
    fontFamily: 'Maven Pro',
    fontSize: '9pt',
    backgroundColor: Colors.bgLighter,
    color: Colors.fgSecondary,
    marginBottom: '8px',
};

export const KNOB_SIZE = 40;
