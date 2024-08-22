import { useEffect, useState } from "react";

export function UseFetchApiDed(pathRequestApiDed, setData) {
    const [dataDed, setDataDed] = useState(setData);
    const [error, setError] = useState(null);
    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        fetch(pathRequestApiDed)
          .then((response) => response.json())
          .then((data) => {
            setDataDed(data);
            setRemoveLoading(true);
          })
          .catch((error) => setError(error))
    }, [pathRequestApiDed]);

    return {dataDed, removeLoading, error};
}
