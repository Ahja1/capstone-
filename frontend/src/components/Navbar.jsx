import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{ maxWidth: "1140px", padding: "0 16px", margin: "0 auto" }}>
            <div
                style={{
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "column",
                }}
            >
                <h1
                    style={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        textAlign: "center",
                        backgroundImage: "linear-gradient(to right, cyan, blue)",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        Boutique
                    </Link>
                </h1>

                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Link to="/create">
                        <button
                            style={{
                                padding: "8px",
                                backgroundColor: "lightgray",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            +
                        </button>
                    </Link>
                    <button
                        onClick={() => {
                            document.body.classList.toggle("dark-mode");
                        }}
                        style={{
                            padding: "8px",
                            backgroundColor: "lightgray",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        🌙
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
