CREATE TABLE data_points (
    id SERIAL PRIMARY KEY,
    intensity INTEGER NOT NULL,
    likelihood INTEGER NOT NULL,
    relevance INTEGER NOT NULL,
    year INTEGER NOT NULL,
    country VARCHAR(100) NOT NULL,
    topics VARCHAR(100) NOT NULL,
    region VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL
);
