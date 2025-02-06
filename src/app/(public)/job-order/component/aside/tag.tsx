import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface TagFieldProps {
  tags: string[];
  setTags?: (tags: string[]) => void;
  error?: string;
}

const TagField: React.FC<TagFieldProps> = ({ tags, setTags, error = "" }) => {
  const tagsOption = ["3D Art", "Mural", "Stencil", "Graffiti", "Illustration"];
  const [tagsState, setTagsState] = useState<Set<string>>(new Set(tags));

  useEffect(() => {
    if (setTags) {
      setTags(Array.from(tagsState));
    }
  }, [tagsState, setTags]);

  const onSelect = (tag: string) => {
    setTagsState((prev) => {
      const newTags = new Set(prev);
      if (newTags.has(tag)) {
        newTags.delete(tag);
      } else {
        newTags.add(tag);
      }
      return newTags;
    });
  };

  return (
    <div className="flex flex-col">
      <h3 className="mb-2">Order Type Tags:</h3>
      <div className="flex flex-wrap justify-center gap-3 p-4 text-base">
        {tagsOption.map((tag) => (
          <Button
            key={tag}
            onClick={() => onSelect(tag)}
            variant="secondary"
            className={`border border-foreground/20 bg-background px-4 hover:bg-foreground/10 ${
              tagsState.has(tag)
                ? "border-primary bg-accent/10 text-primary"
                : "bg-background hover:bg-foreground/10"
            }`}
          >
            {tag}
          </Button>
        ))}
      </div>
      {error && <p className="text-destructive">{error}</p>}
    </div>
  );
};

export default TagField;
