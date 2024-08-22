import { useEffect, useState } from "react";

export function UseFetchApiDed(pathRequestApiDed) {
    const [classRpg, setClassRpg] = useState(null);
    const [error, setError] = useState(null);
    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        fetch(pathRequestApiDed)
          .then((response) => response.json())
          .then((data) => {
            setClassRpg(data);
            setRemoveLoading(true);
          })
          .catch((error) => setError(error))
    }, [pathRequestApiDed]);

    return {classRpg, removeLoading, error};
}
