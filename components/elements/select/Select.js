
import React from 'react';
import 'antd/dist/antd.css';
import {Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
// import SelectStyle from './select.ajax.style.js';

function DebounceSelect({ fetchOptions, debounceTimeout = 10, ...props }) {
    const [fetching, setFetching] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const fetchRef = React.useRef(0);
    const [value, setValue] = React.useState([]);

    const debounceFetcher = React.useMemo(() => {
    const loadOptions = (value) => {
            if (value.target.nodeName === "DIV") return;
            fetchRef.current += 1;
            const fetchId = fetchRef.current;
            setOptions([]);
            setFetching(true);
            fetchOptions(value).then((newOptions) => {
                if (fetchId !== fetchRef.current) {
                    // for fetch callback order
                    return;
                }

                setOptions(newOptions);
                setFetching(false);
            });
        };

        return debounce(loadOptions, debounceTimeout);
    }, [fetchOptions, debounceTimeout]);

    return (
        // <SelectStyle>
            <Select
                labelInValue
                filterOption={(input, option) =>
                    option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                showSearch
                onClick={debounceFetcher}
                notFoundContent={fetching ? <Spin size="small" /> : null}
                {...props}
                options={options}
            />
        // </SelectStyle>
    );
}

export default DebounceSelect;